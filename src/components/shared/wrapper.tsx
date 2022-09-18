import clsx from 'clsx';
import './styles.scss';

export interface WrapperProps {
  className?: string;
  footerElement: React.ReactElement;
  mainElement: React.ReactElement | React.ReactElement[];
  title: string;
}

export function Wrapper(props: WrapperProps) {
  return (
    <div className={clsx("wrapper", props.className)}>
      <header>
        <h1>{props.title}</h1>
      </header>
      <main className="wrapper-main">{props.mainElement}</main>
      <footer className="wrapper-footer">{props.footerElement}</footer>
    </div>
  );
}
