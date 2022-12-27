// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeTwoToneSvg from '@ant-design/icons-svg/lib/asn/MaximizeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeTwoTone: MaximizeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeTwoToneSvg}></AntdIcon>;
};

MaximizeTwoTone.displayName = 'MaximizeTwoTone';
MaximizeTwoTone.inheritAttrs = false;
export default MaximizeTwoTone;