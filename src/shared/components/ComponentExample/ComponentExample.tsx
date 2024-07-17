export interface ComponentExampleProps {
    exampleText: string;
}

const ComponentExample = ({ exampleText }: ComponentExampleProps) => {
    return <>{exampleText}</>;
};

export default ComponentExample;
