## Dev
```bash
python3 -m grpc_tools.protoc -I proto/services/impulse_svc/v1 --python_out=services/impulse_svc/grpc_service --grpc_python_out=services/impulse_svc/grpc_service proto/services/impulse_svc/v1/impulse_svc.proto
```