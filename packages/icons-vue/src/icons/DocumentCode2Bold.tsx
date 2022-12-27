// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCode2BoldSvg from '@ant-design/icons-svg/lib/asn/DocumentCode2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCode2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCode2Bold: DocumentCode2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCode2BoldSvg}></AntdIcon>;
};

DocumentCode2Bold.displayName = 'DocumentCode2Bold';
DocumentCode2Bold.inheritAttrs = false;
export default DocumentCode2Bold;