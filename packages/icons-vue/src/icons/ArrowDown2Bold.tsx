// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown2BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowDown2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown2Bold: ArrowDown2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown2BoldSvg}></AntdIcon>;
};

ArrowDown2Bold.displayName = 'ArrowDown2Bold';
ArrowDown2Bold.inheritAttrs = false;
export default ArrowDown2Bold;