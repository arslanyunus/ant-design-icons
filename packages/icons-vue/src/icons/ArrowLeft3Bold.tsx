// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft3BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft3Bold: ArrowLeft3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft3BoldSvg}></AntdIcon>;
};

ArrowLeft3Bold.displayName = 'ArrowLeft3Bold';
ArrowLeft3Bold.inheritAttrs = false;
export default ArrowLeft3Bold;