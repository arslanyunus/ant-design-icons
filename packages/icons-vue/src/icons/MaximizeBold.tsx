// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeBoldSvg from '@ant-design/icons-svg/lib/asn/MaximizeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeBold: MaximizeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeBoldSvg}></AntdIcon>;
};

MaximizeBold.displayName = 'MaximizeBold';
MaximizeBold.inheritAttrs = false;
export default MaximizeBold;