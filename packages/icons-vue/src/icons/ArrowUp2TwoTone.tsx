// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp2TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowUp2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp2TwoTone: ArrowUp2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp2TwoToneSvg}></AntdIcon>;
};

ArrowUp2TwoTone.displayName = 'ArrowUp2TwoTone';
ArrowUp2TwoTone.inheritAttrs = false;
export default ArrowUp2TwoTone;