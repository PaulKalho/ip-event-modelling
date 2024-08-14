// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: copyfrom.go

package task_template_repo

import (
	"context"
)

// iteratorForAppendSubTasks implements pgx.CopyFromSource.
type iteratorForAppendSubTasks struct {
	rows                 []AppendSubTasksParams
	skippedFirstNextCall bool
}

func (r *iteratorForAppendSubTasks) Next() bool {
	if len(r.rows) == 0 {
		return false
	}
	if !r.skippedFirstNextCall {
		r.skippedFirstNextCall = true
		return true
	}
	r.rows = r.rows[1:]
	return len(r.rows) > 0
}

func (r iteratorForAppendSubTasks) Values() ([]interface{}, error) {
	return []interface{}{
		r.rows[0].Name,
		r.rows[0].TaskTemplateID,
	}, nil
}

func (r iteratorForAppendSubTasks) Err() error {
	return nil
}

func (q *Queries) AppendSubTasks(ctx context.Context, arg []AppendSubTasksParams) (int64, error) {
	return q.db.CopyFrom(ctx, []string{"task_template_subtasks"}, []string{"name", "task_template_id"}, &iteratorForAppendSubTasks{rows: arg})
}
