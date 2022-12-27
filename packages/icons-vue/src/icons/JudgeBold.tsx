// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JudgeBoldSvg from '@ant-design/icons-svg/lib/asn/JudgeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JudgeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JudgeBold: JudgeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JudgeBoldSvg}></AntdIcon>;
};

JudgeBold.displayName = 'JudgeBold';
JudgeBold.inheritAttrs = false;
export default JudgeBold;