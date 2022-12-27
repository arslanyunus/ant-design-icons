// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBold: ArrowBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBoldSvg}></AntdIcon>;
};

ArrowBold.displayName = 'ArrowBold';
ArrowBold.inheritAttrs = false;
export default ArrowBold;