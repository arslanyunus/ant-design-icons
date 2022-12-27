// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUpBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUpBold: ArrowUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpBoldSvg}></AntdIcon>;
};

ArrowUpBold.displayName = 'ArrowUpBold';
ArrowUpBold.inheritAttrs = false;
export default ArrowUpBold;