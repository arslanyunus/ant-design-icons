// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp1TwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowUp1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp1TwoTone: ArrowUp1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp1TwoToneSvg}></AntdIcon>;
};

ArrowUp1TwoTone.displayName = 'ArrowUp1TwoTone';
ArrowUp1TwoTone.inheritAttrs = false;
export default ArrowUp1TwoTone;