// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3DBoldSvg from '@ant-design/icons-svg/lib/asn/Square3DBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3DBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3DBold: Square3DBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3DBoldSvg}></AntdIcon>;
};

Square3DBold.displayName = 'Square3DBold';
Square3DBold.inheritAttrs = false;
export default Square3DBold;