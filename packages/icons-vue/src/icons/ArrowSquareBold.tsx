// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareBold: ArrowSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareBoldSvg}></AntdIcon>;
};

ArrowSquareBold.displayName = 'ArrowSquareBold';
ArrowSquareBold.inheritAttrs = false;
export default ArrowSquareBold;