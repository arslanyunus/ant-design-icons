// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight3BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowRight3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight3Bold: ArrowRight3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight3BoldSvg}></AntdIcon>;
};

ArrowRight3Bold.displayName = 'ArrowRight3Bold';
ArrowRight3Bold.inheritAttrs = false;
export default ArrowRight3Bold;