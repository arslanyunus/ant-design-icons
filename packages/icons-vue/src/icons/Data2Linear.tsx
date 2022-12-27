// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Data2LinearSvg from '@ant-design/icons-svg/lib/asn/Data2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Data2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Data2Linear: Data2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Data2LinearSvg}></AntdIcon>;
};

Data2Linear.displayName = 'Data2Linear';
Data2Linear.inheritAttrs = false;
export default Data2Linear;