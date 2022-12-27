// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareTwoTone: ArrowSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareTwoToneSvg}></AntdIcon>;
};

ArrowSquareTwoTone.displayName = 'ArrowSquareTwoTone';
ArrowSquareTwoTone.inheritAttrs = false;
export default ArrowSquareTwoTone;