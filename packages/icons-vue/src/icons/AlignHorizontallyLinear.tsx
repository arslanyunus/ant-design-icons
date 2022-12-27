// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignHorizontallyLinearSvg from '@ant-design/icons-svg/lib/asn/AlignHorizontallyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignHorizontallyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignHorizontallyLinear: AlignHorizontallyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignHorizontallyLinearSvg}></AntdIcon>;
};

AlignHorizontallyLinear.displayName = 'AlignHorizontallyLinear';
AlignHorizontallyLinear.inheritAttrs = false;
export default AlignHorizontallyLinear;