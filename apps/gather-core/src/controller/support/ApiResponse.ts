export class ApiResponse {
  static ok<T>(data: T) {
    return {
      result: 'success',
      data: data,
    };
  }

  static fail(errorCode: string, errorMessage: string) {
    return {
      result: 'fail',
      error: {
        code: errorCode,
        errorMessage: errorMessage,
      },
    };
  }
}
