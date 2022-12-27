// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export2LinearSvg from '@ant-design/icons-svg/lib/asn/Export2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export2Linear: Export2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export2LinearSvg}></AntdIcon>;
};

Export2Linear.displayName = 'Export2Linear';
Export2Linear.inheritAttrs = false;
export default Export2Linear;