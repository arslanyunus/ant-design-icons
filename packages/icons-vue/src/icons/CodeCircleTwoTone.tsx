// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeCircleTwoTone: CodeCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeCircleTwoToneSvg}></AntdIcon>;
};

CodeCircleTwoTone.displayName = 'CodeCircleTwoTone';
CodeCircleTwoTone.inheritAttrs = false;
export default CodeCircleTwoTone;