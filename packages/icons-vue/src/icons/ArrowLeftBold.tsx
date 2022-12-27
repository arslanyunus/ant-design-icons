// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftBoldSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeftBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeftBold: ArrowLeftBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftBoldSvg}></AntdIcon>;
};

ArrowLeftBold.displayName = 'ArrowLeftBold';
ArrowLeftBold.inheritAttrs = false;
export default ArrowLeftBold;