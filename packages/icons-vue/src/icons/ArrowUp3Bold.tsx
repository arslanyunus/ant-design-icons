// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp3BoldSvg from '@ant-design/icons-svg/lib/asn/ArrowUp3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp3Bold: ArrowUp3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp3BoldSvg}></AntdIcon>;
};

ArrowUp3Bold.displayName = 'ArrowUp3Bold';
ArrowUp3Bold.inheritAttrs = false;
export default ArrowUp3Bold;