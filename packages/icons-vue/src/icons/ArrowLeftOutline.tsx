// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeftOutline: ArrowLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeftOutlineSvg}></AntdIcon>;
};

ArrowLeftOutline.displayName = 'ArrowLeftOutline';
ArrowLeftOutline.inheritAttrs = false;
export default ArrowLeftOutline;