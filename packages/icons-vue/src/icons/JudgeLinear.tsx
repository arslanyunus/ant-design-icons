// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JudgeLinearSvg from '@ant-design/icons-svg/lib/asn/JudgeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JudgeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JudgeLinear: JudgeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JudgeLinearSvg}></AntdIcon>;
};

JudgeLinear.displayName = 'JudgeLinear';
JudgeLinear.inheritAttrs = false;
export default JudgeLinear;