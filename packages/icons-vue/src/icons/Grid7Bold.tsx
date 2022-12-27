// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid7BoldSvg from '@ant-design/icons-svg/lib/asn/Grid7Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid7BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid7Bold: Grid7BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid7BoldSvg}></AntdIcon>;
};

Grid7Bold.displayName = 'Grid7Bold';
Grid7Bold.inheritAttrs = false;
export default Grid7Bold;