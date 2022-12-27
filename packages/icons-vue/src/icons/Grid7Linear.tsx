// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid7LinearSvg from '@ant-design/icons-svg/lib/asn/Grid7Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid7LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid7Linear: Grid7LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid7LinearSvg}></AntdIcon>;
};

Grid7Linear.displayName = 'Grid7Linear';
Grid7Linear.inheritAttrs = false;
export default Grid7Linear;