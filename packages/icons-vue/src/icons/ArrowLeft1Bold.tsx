// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft1BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft1Bold: ArrowLeft1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft1BoldSvg}></AntdIcon>;
};

ArrowLeft1Bold.displayName = 'ArrowLeft1Bold';
ArrowLeft1Bold.inheritAttrs = false;
export default ArrowLeft1Bold;