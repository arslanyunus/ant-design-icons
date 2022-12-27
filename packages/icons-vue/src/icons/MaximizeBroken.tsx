// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeBrokenSvg from '@ant-design/icons-svg/lib/asn/MaximizeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeBroken: MaximizeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeBrokenSvg}></AntdIcon>;
};

MaximizeBroken.displayName = 'MaximizeBroken';
MaximizeBroken.inheritAttrs = false;
export default MaximizeBroken;