// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeCircleBulkSvg from '@ant-design/icons-svg/lib/asn/CodeCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeCircleBulk: CodeCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeCircleBulkSvg}></AntdIcon>;
};

CodeCircleBulk.displayName = 'CodeCircleBulk';
CodeCircleBulk.inheritAttrs = false;
export default CodeCircleBulk;