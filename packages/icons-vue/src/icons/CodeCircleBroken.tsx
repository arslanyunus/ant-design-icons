// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/CodeCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeCircleBroken: CodeCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeCircleBrokenSvg}></AntdIcon>;
};

CodeCircleBroken.displayName = 'CodeCircleBroken';
CodeCircleBroken.inheritAttrs = false;
export default CodeCircleBroken;