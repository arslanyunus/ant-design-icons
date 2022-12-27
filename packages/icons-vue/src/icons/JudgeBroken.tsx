// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JudgeBrokenSvg from '@ant-design/icons-svg/lib/asn/JudgeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JudgeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JudgeBroken: JudgeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JudgeBrokenSvg}></AntdIcon>;
};

JudgeBroken.displayName = 'JudgeBroken';
JudgeBroken.inheritAttrs = false;
export default JudgeBroken;