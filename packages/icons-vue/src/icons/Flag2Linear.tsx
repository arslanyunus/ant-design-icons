// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flag2LinearSvg from '@ant-design/icons-svg/lib/asn/Flag2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flag2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flag2Linear: Flag2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flag2LinearSvg}></AntdIcon>;
};

Flag2Linear.displayName = 'Flag2Linear';
Flag2Linear.inheritAttrs = false;
export default Flag2Linear;