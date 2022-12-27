// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown2TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowDown2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown2TwoTone: ArrowDown2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown2TwoToneSvg}></AntdIcon>;
};

ArrowDown2TwoTone.displayName = 'ArrowDown2TwoTone';
ArrowDown2TwoTone.inheritAttrs = false;
export default ArrowDown2TwoTone;