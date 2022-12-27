// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3BoldSvg from '@ant-design/icons-svg/lib/asn/Square3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3Bold: Square3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3BoldSvg}></AntdIcon>;
};

Square3Bold.displayName = 'Square3Bold';
Square3Bold.inheritAttrs = false;
export default Square3Bold;