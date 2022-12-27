// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid3BoldSvg from '@ant-design/icons-svg/lib/asn/Grid3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid3Bold: Grid3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid3BoldSvg}></AntdIcon>;
};

Grid3Bold.displayName = 'Grid3Bold';
Grid3Bold.inheritAttrs = false;
export default Grid3Bold;