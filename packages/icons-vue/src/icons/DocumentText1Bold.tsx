// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentText1BoldSvg from '@ant-design/icons-svg/lib/asn/DocumentText1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentText1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentText1Bold: DocumentText1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentText1BoldSvg}></AntdIcon>;
};

DocumentText1Bold.displayName = 'DocumentText1Bold';
DocumentText1Bold.inheritAttrs = false;
export default DocumentText1Bold;