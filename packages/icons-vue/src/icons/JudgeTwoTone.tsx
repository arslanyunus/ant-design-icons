// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JudgeTwoToneSvg from '@ant-design/icons-svg/lib/asn/JudgeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JudgeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JudgeTwoTone: JudgeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JudgeTwoToneSvg}></AntdIcon>;
};

JudgeTwoTone.displayName = 'JudgeTwoTone';
JudgeTwoTone.inheritAttrs = false;
export default JudgeTwoTone;