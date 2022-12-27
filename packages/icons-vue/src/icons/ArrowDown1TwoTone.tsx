// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown1TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowDown1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown1TwoTone: ArrowDown1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown1TwoToneSvg}></AntdIcon>;
};

ArrowDown1TwoTone.displayName = 'ArrowDown1TwoTone';
ArrowDown1TwoTone.inheritAttrs = false;
export default ArrowDown1TwoTone;