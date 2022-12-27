// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowTwoTone: ArrowTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowTwoToneSvg}></AntdIcon>;
};

ArrowTwoTone.displayName = 'ArrowTwoTone';
ArrowTwoTone.inheritAttrs = false;
export default ArrowTwoTone;