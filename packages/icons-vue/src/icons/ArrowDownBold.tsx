// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDownBold: ArrowDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownBoldSvg}></AntdIcon>;
};

ArrowDownBold.displayName = 'ArrowDownBold';
ArrowDownBold.inheritAttrs = false;
export default ArrowDownBold;