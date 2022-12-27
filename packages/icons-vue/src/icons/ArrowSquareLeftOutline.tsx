// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareLeftOutlineSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareLeftOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareLeftOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareLeftOutline: ArrowSquareLeftOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareLeftOutlineSvg}></AntdIcon>;
};

ArrowSquareLeftOutline.displayName = 'ArrowSquareLeftOutline';
ArrowSquareLeftOutline.inheritAttrs = false;
export default ArrowSquareLeftOutline;