// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JudgeOutlineSvg from '@ant-design/icons-svg/lib/asn/JudgeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JudgeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JudgeOutline: JudgeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JudgeOutlineSvg}></AntdIcon>;
};

JudgeOutline.displayName = 'JudgeOutline';
JudgeOutline.inheritAttrs = false;
export default JudgeOutline;