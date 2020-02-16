import React from "react";
type Props = {
  children: React.ReactNode;
};
type State = {
  error?: Error;
};
type ReactErrorInfo = {
  componentStack: string;
};
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error, info?: ReactErrorInfo) {
    // TODO 動作検証
    console.error(error, info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return error ? <>えらー</> : children;
  }
}
