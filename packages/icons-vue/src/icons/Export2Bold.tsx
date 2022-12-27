// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export2BoldSvg from '@ant-design/icons-svg/lib/asn/Export2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export2Bold: Export2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export2BoldSvg}></AntdIcon>;
};

Export2Bold.displayName = 'Export2Bold';
Export2Bold.inheritAttrs = false;
export default Export2Bold;