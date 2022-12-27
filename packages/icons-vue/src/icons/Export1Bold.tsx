// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export1BoldSvg from '@ant-design/icons-svg/lib/asn/Export1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export1Bold: Export1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export1BoldSvg}></AntdIcon>;
};

Export1Bold.displayName = 'Export1Bold';
Export1Bold.inheritAttrs = false;
export default Export1Bold;