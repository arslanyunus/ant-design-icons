// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid1BoldSvg from '@ant-design/icons-svg/lib/asn/Grid1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid1Bold: Grid1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid1BoldSvg}></AntdIcon>;
};

Grid1Bold.displayName = 'Grid1Bold';
Grid1Bold.inheritAttrs = false;
export default Grid1Bold;