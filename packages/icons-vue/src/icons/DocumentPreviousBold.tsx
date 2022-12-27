// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentPreviousBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentPreviousBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentPreviousBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentPreviousBold: DocumentPreviousBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentPreviousBoldSvg}></AntdIcon>;
};

DocumentPreviousBold.displayName = 'DocumentPreviousBold';
DocumentPreviousBold.inheritAttrs = false;
export default DocumentPreviousBold;