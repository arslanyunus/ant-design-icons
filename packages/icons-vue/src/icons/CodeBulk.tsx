// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeBulkSvg from '@ant-design/icons-svg/lib/asn/CodeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeBulk: CodeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeBulkSvg}></AntdIcon>;
};

CodeBulk.displayName = 'CodeBulk';
CodeBulk.inheritAttrs = false;
export default CodeBulk;