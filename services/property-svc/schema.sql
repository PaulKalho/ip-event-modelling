--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: does_select_option_belong_to_property(uuid, uuid); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.does_select_option_belong_to_property(property_id uuid, select_value uuid) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
BEGIN
	IF select_value IS NOT NULL THEN
		RETURN EXISTS (
			SELECT 1
	   		FROM properties
	   			RIGHT JOIN select_datas ON properties.select_data_id = select_datas.id
				RIGHT JOIN select_options ON select_datas.id = select_options.select_data_id
			WHERE properties.id = property_id AND select_options.id = select_value
		);
	ELSE
		RETURN TRUE;
	END IF;
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: properties; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.properties (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    subject_type integer NOT NULL,
    field_type integer NOT NULL,
    name text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    is_archived boolean DEFAULT false NOT NULL,
    set_id uuid,
    select_data_id uuid
);


--
-- Name: property_values; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.property_values (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    property_id uuid NOT NULL,
    subject_id uuid NOT NULL,
    text_value text,
    number_value double precision,
    bool_value boolean,
    date_value date,
    date_time_value timestamp without time zone,
    select_value uuid,
    CONSTRAINT property_values_check CHECK (((((((((text_value IS NOT NULL))::integer + ((number_value IS NOT NULL))::integer) + ((bool_value IS NOT NULL))::integer) + ((date_value IS NOT NULL))::integer) + ((date_time_value IS NOT NULL))::integer) + ((select_value IS NOT NULL))::integer) = 1)),
    CONSTRAINT property_values_check1 CHECK (public.does_select_option_belong_to_property(property_id, select_value))
);


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version bigint NOT NULL,
    dirty boolean NOT NULL
);


--
-- Name: select_datas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.select_datas (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    allow_freetext boolean DEFAULT false NOT NULL
);


--
-- Name: select_options; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.select_options (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name text NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    is_custom boolean DEFAULT false NOT NULL,
    select_data_id uuid NOT NULL
);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (id);


--
-- Name: property_values property_values_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.property_values
    ADD CONSTRAINT property_values_pkey PRIMARY KEY (id);


--
-- Name: property_values property_values_property_id_subject_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.property_values
    ADD CONSTRAINT property_values_property_id_subject_id_key UNIQUE (property_id, subject_id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: select_datas select_datas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.select_datas
    ADD CONSTRAINT select_datas_pkey PRIMARY KEY (id);


--
-- Name: select_options select_options_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.select_options
    ADD CONSTRAINT select_options_pkey PRIMARY KEY (id);


--
-- Name: idx_property_subject; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_property_subject ON public.property_values USING btree (property_id, subject_id);


--
-- Name: properties properties_select_data_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_select_data_id_fkey FOREIGN KEY (select_data_id) REFERENCES public.select_datas(id) ON DELETE SET NULL;


--
-- Name: property_values property_values_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.property_values
    ADD CONSTRAINT property_values_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.properties(id) ON DELETE CASCADE;


--
-- Name: property_values property_values_select_value_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.property_values
    ADD CONSTRAINT property_values_select_value_fkey FOREIGN KEY (select_value) REFERENCES public.select_options(id) ON DELETE CASCADE;


--
-- Name: select_options select_options_select_data_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.select_options
    ADD CONSTRAINT select_options_select_data_id_fkey FOREIGN KEY (select_data_id) REFERENCES public.select_datas(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--
