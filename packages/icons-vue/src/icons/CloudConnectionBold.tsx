// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudConnectionBoldSvg from '@ant-design/icons-svg/lib/asn/CloudConnectionBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudConnectionBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudConnectionBold: CloudConnectionBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudConnectionBoldSvg}></AntdIcon>;
};

CloudConnectionBold.displayName = 'CloudConnectionBold';
CloudConnectionBold.inheritAttrs = false;
export default CloudConnectionBold;