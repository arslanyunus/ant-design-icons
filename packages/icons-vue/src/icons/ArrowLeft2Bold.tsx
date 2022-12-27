// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft2BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft2Bold: ArrowLeft2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft2BoldSvg}></AntdIcon>;
};

ArrowLeft2Bold.displayName = 'ArrowLeft2Bold';
ArrowLeft2Bold.inheritAttrs = false;
export default ArrowLeft2Bold;