// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt2LinearSvg from '@ant-design/icons-svg/lib/asn/Receipt2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt2Linear: Receipt2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt2LinearSvg}></AntdIcon>;
};

Receipt2Linear.displayName = 'Receipt2Linear';
Receipt2Linear.inheritAttrs = false;
export default Receipt2Linear;